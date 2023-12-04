// task3
const size = prompt("specify the size of the media");
const FILE_SIZE = 820 / 1000;
const task3Result = Math.floor(+size / FILE_SIZE);
const messageTask3Result = `${task3Result} files with a size of 820 Mb will fit on your storage medium`;
export { messageTask3Result};