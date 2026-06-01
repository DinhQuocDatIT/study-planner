import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import styles from "./TaskBoardView.module.css";
import TaskItem from "../TaskItem/TaskItem";
import { TASK_ITEM_VARIANTS } from "../../../constants/taskItemVariants";
function TaskBoardView({ tasks, setTaskList }) {
  const columns = {
    todo: {
      title: "Chưa làm",
      items: tasks.filter((task) => task.status === "todo"),
    },
    "in-progress": {
      title: "Đang làm",
      items: tasks.filter((task) => task.status === "in-progress"),
    },
    completed: {
      title: "Hoàn thành",
      items: tasks.filter((task) => task.status === "completed"),
    },
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const taskId = Number(result.draggableId);
    const newStatus = result.destination.droppableId;

    setTaskList((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      ),
    );
  };

  return (
    <div className={styles.wrapper}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className={styles.board}>
          {Object.entries(columns).map(([columnId, column]) => (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided) => (
                <div className={styles.column}>
                  <div className={styles.columnHeader}>
                    <span className={styles.columnTitle}>{column.title}</span>

                    <span className={styles.count}>{column.items.length}</span>
                  </div>

                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={styles.taskList}
                  >
                    {column.items.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className={styles.taskCard}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <TaskItem
                              task={task}
                              variant={TASK_ITEM_VARIANTS.DETAILED}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}

                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
export default TaskBoardView;
