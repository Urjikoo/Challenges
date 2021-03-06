// Given a list paths of directory info, including the directory path, and all the files with contents in this directory, return all the duplicate files in the file system in terms of their paths. You may return the answer in any order.

// A group of duplicate files consists of at least two files that have the same content.

// A single directory info string in the input list has the following format:

// "root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"
// It means there are n files (f1.txt, f2.txt ... fn.txt) with content (f1_content, f2_content ... fn_content) respectively in the directory "root/d1/d2/.../dm". Note that n >= 1 and m >= 0. If m = 0, it means the directory is just the root directory.

// The output is a list of groups of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:

// "directory_path/file_name.txt"

paths = [
  "root/a 1.txt(abcd) 2.txt(efgh)",
  "root/c 3.txt(abcd)",
  "root/c/d 4.txt(efgh)",
  "root 4.txt(efgh)",
];
//returning the files that has duplicate content.
//first loop through the paths and separate(split it by the gap)=>that will create an array and then loop throuhgh the new array and extract the root and content.then create a map and grab the content and path to group the duplicate files(file holders).
//new

function duplicateArr(paths) {
  let fileMap = new Map(); //creating a map
  for (let i = 0; i < paths.length; i++) {
    //loop through paths to split it
    let filePath = paths[i].split(" ");
    for (let j = 1; j < filePath.length; j++) {
      let fileArr = filePath[j].split("(");
      let wholePath = filePath[0] + "/" + fileArr[0];
      let content = fileArr[1];
      let contentArr = fileMap.get(content);
      if (!contentArr) {
        fileMap.set(content, [wholePath]);
      } else {
        contentArr.push(wholePath);
      }
    }
  }
  let store = [];
  for (let [keys, values] of fileMap) {
    let duplicateVal = fileMap.get(keys);
    if (duplicateVal && duplicateVal.length > 1) {
      store.push(duplicateVal);
    }
  }
  return store;
}
console.log(duplicateArr(paths));
