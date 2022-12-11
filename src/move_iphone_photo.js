/**
 * 把照片导出，并存入硬盘用
 * - 一个文件夹最多存30个文件，不然存的太大，文件夹容易打不开
 *
 * @format
 */

const fs = require('fs');
const path = require('path');

// utils
// 文件夹补0
const _prefixZero = (num, length) => (Array(length).join('0') + num).slice(-length);
// 从mac照片导出来的，直接做好分类和存储
const move = ({ path_from, path_to, count_per_dir = 30 }) => {
  let dir_count = 0;
  let photo_count = 0;

  const res = fs.readdirSync(path_from);
  res.forEach(name_child_dir => {
    // 过滤系统文件
    if (name_child_dir.indexOf('.') === 0) return;
    const name_photos = fs.readdirSync(path.resolve(path_from, name_child_dir));
    name_photos.forEach(name_photo => {
      // 如果文件夹文件已满，创建新的文件夹，并清空计数
      if (photo_count === count_per_dir) {
        dir_count++;
        photo_count = 0;
      }
      // 文件夹四位数应该够了
      const name_new_dir = _prefixZero(dir_count, 4);
      const path_new_dir = path.resolve(path_to, name_new_dir);
      // 如果文件夹还不在，创建一个
      if (!fs.existsSync(path_new_dir)) fs.mkdirSync(path_new_dir);
      const path_new_photo = path.resolve(path_new_dir, `${name_child_dir}_${name_photo}`);
      fs.renameSync(path.resolve(path_from, name_child_dir, name_photo), path_new_photo);
      photo_count++;
    });
  });
};

move({
  path_from: '/Users/aalocal/Downloads/测试',
  path_to: '/Users/aalocal/Downloads/移动',
  count_per_dir: 30
});

// 3D旋转变换效果、火影片尾曲模拟
