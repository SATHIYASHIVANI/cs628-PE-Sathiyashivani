Input: 
    ~ We task some input field and clicks the "Add Task" button, which adds the task to the list displayed below. Multiple tasks can be entered in succession, each appearing with a "Delete" button next to it. If the user clicks "Delete" on any task, that specific task is removed from the list.

Process:
    ~ When a task is added, it is stored in a list, and the UI dynamically updates to display all tasks. Each task is assigned a unique index, allowing the "Delete" button to remove only the selected task. The state is updated after each addition or deletion, ensuring that only the latest tasks are displayed.

 Output: 
    ~ Initially, the task list is empty. As the user adds tasks, they appear sequentially in the list, each accompanied by a "Delete" button. 
    ~ When a task is deleted, it is immediately removed from the list, and the remaining tasks shift accordingly. The UI continuously updates to reflect the current state of the task list, ensuring that only the active tasks are displayed.
