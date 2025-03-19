/**
 * Sắp xếp mảng đối tượng dựa trên thứ tự của một mảng khác.
 * Hàm này tạo ra một mảng mới mà không thay đổi mảng gốc.
 *
 * @param {Array} originalArray - Mảng gốc chứa các đối tượng cần sắp xếp.
 * @param {Array} orderArray - Mảng chứa thứ tự mong muốn của các giá trị.
 * @param {string} key - Tên thuộc tính trong đối tượng để sắp xếp.
 * @returns {Array} - Mảng đã được sắp xếp.
 */
export const mapOrder = (originalArray, orderArray, key) => {
  if (!Array.isArray(originalArray) || !Array.isArray(orderArray) || typeof key !== "string") {
    return [];
  }

  // Tạo một Map để tra cứu index của giá trị trong orderArray nhanh hơn
  const orderMap = new Map(orderArray.map((value, index) => [value, index]));

  return originalArray
    .filter(item => orderMap.has(item[key])) // Chỉ giữ lại các phần tử có trong orderArray
    .sort((a, b) => orderMap.get(a[key]) - orderMap.get(b[key])); // Sắp xếp theo thứ tự trong orderArray
};