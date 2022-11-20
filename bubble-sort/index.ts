import { TaskList } from "./concrete";

// 集約体(aggregate)に依存しないことで、
// 使用している側で、実装内容を意識せずに済む
// 使用している側は hasNextとnextを使用するので、その中身が変わっても気にすることはない

const agr = new TaskList([]);

agr.add({ name: "タスク1" });
agr.add({ name: "タスク2" });
agr.add({ name: "タスク3" });
agr.add({ name: "タスク4" });

const itr = agr.createIterater();

while (itr.hasNext()) {
  const task = itr.next();
  console.log(task);
}
