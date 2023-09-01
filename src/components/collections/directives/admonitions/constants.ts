import {
  InformationCircleIcon,
  BoltIcon,
  LightBulbIcon,
  ArrowRightCircleIcon,
  PencilSquareIcon,
  SpeakerWaveIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  ShieldExclamationIcon,
  XCircleIcon,
} from "@heroicons/vue/24/outline";

export const iconsMap: Record<string, any> = {
  note: InformationCircleIcon,
  important: BoltIcon,
  hint: LightBulbIcon,
  seealso: ArrowRightCircleIcon,
  tip: PencilSquareIcon,
  attention: SpeakerWaveIcon,
  caution: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon,
  danger: ShieldExclamationIcon,
  error: XCircleIcon,
};

export const colorMap: Record<string, { deep: string; shallow: string }> = {
  note: { deep: "rgb(59, 130, 246)", shallow: "rgb(239, 246, 255)" },
  important: { deep: "rgb(59, 130, 246)", shallow: "rgb(239, 246, 255)" },
  hint: { deep: "rgb(22, 163, 74)", shallow: "rgb(240, 253, 244)" },
  seealso: { deep: "rgb(22, 163, 74)", shallow: "rgb(240, 253, 244)" },
  tip: { deep: "rgb(22, 163, 74)", shallow: "rgb(240, 253, 244)" },
  attention: { deep: "rgb(217, 119, 6)", shallow: "rgb(255, 251, 235)" },
  caution: { deep: "rgb(217, 119, 6)", shallow: "rgb(255, 251, 235)" },
  warning: { deep: "rgb(217, 119, 6)", shallow: "rgb(255, 251, 235)" },
  danger: { deep: "rgb(220, 38, 38)", shallow: "rgb(254, 242, 242)" },
  error: { deep: "rgb(220, 38, 38)", shallow: "rgb(254, 242, 242)" },
};
