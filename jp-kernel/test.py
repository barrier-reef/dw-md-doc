from flask import Flask, request, jsonify
from flask_socketio import SocketIO, disconnect
from concurrent.futures import ThreadPoolExecutor
from jupyter_client import KernelManager
import asyncio
from time import sleep
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
socketio = SocketIO(
    app,
    cors_allowed_origins="*",
    # async_mode="gevent",
)

# kernel_manager = KernelManager()
# kernel_manager.start_kernel()
# kernel_client = kernel_manager.client()
# kernel_client.start_channels()
pool = ThreadPoolExecutor(max_workers=1)

# asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())


def run(sid):
    return


@socketio.on("connect")
def execute():
    pool.submit(run, request.sid)
    socketio.send("hello", to=request.sid)
    disconnect()


if __name__ == "__main__":
    socketio.run(app)
