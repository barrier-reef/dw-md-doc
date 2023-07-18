from flask import Flask, request, jsonify
from jupyter_client import KernelManager
import threading
import asyncio
import uuid
from time import sleep
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

kernel_manager = KernelManager()
kernel_manager.start_kernel()
kernel_client = kernel_manager.client()
kernel_client.start_channels()
users = {}

asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())


def run(kernel_client, code, user_info):
    kernel_client.execute(code)
    while True:
        msg = kernel_client.get_iopub_msg()
        msg_type = msg["msg_type"]
        content = msg["content"]
        print(content)
        if user_info:
            if msg_type == "execute_result":
                data = content["data"]
                if "text/plain" in data:
                    user_info["result"]["text"] = data["text/plain"]
                if "text/html" in data:
                    user_info["result"]["html"] = data["text/html"]
            if msg_type == "error":
                user_info["result"]["error"] = content["traceback"]
            if msg_type == "stream":
                user_info["result"]["stream"] = content["text"]
            if msg_type == "display_data":
                data = content["data"]
                if "image/png" in data:
                    # print(data["image/png"])
                    user_info["result"]["image"] = data["image/png"]
        if msg_type == "status" and content["execution_state"] == "idle":
            if user_info:
                user_info["status"] = "finished"
            break


run(kernel_client, "get_ipython().run_line_magic('matplotlib', 'inline')", None)


@app.before_request
def before_request():
    if request.method == "POST":
        user_id = str(uuid.uuid4())
        code = request.json["code"]
        users[user_id] = {
            "status": "running",
            "result": {
                "text": None,
                "html": None,
                "image": None,
                "error": None,
                "stream": None,
            },
        }
        task = threading.Thread(target=run, args=(kernel_client, code, users[user_id]))
        task.start()
        request.user_id = user_id


@app.route("/execute", methods=["POST"])
def execute():
    response = jsonify(result=None)
    if hasattr(request, "user_id"):
        user_id = request.user_id
        while users[user_id]["status"] == "running":
            sleep(0.1)
        result = users[user_id]["result"]
        users.pop(user_id)
        response = jsonify(result=result)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


if __name__ == "__main__":
    app.run()
