import {
  faClipboardList,
  faCalendar,
  faBookOpen,
  faGamepad,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";

export const IDNAVITEMS = {
  DASHBOARD: "dashboard",
  SUBJECTS: "subjects",
  TASKS: "tasks",
  SCHEDULE: "schedule",
  STUDYSESSIONS: "studySessions",
};
export const navItems = [
  {
    id: IDNAVITEMS.DASHBOARD,
    label: "Bảng điều khiển",
    path: "/",
    icon: faGamepad,
  },
  {
    id: IDNAVITEMS.SUBJECTS,
    label: "Môn học",
    path: "/subjects",
    icon: faBookOpen,
  },
  {
    id: IDNAVITEMS.TASKS,
    label: "Nhiệm vụ",
    path: "/tasks",
    icon: faClipboardList,
  },
  {
    id: IDNAVITEMS.SCHEDULE,
    label: "Lịch trình",
    path: "/schedule",
    icon: faCalendar,
  },
  {
    id: IDNAVITEMS.STUDYSESSIONS,
    label: "Phiên học",
    path: "/study_sessions",
    icon: faHourglassHalf,
  },
];
