// 使用fetch API读取XML数据
fetch("book.xml")
  .then((response) => {
    if (!response.ok) {
      throw new Error("网络响应有误");
    }
    return response.text();
  })
  .then((data) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "application/xml");

    // 获取所有书籍
    const books = xmlDoc.getElementsByTagName("book");
    let output = "";

    // 遍历书籍并构建HTML
    for (let i = 0; i < books.length; i++) {
      const title = books[i].getElementsByTagName("title")[0].textContent;
      const author = books[i].getElementsByTagName("author")[0].textContent;
      const price = books[i].getElementsByTagName("price")[0].textContent;

      output += `<div>
                <h2>${title}</h2>
                <p>作者: ${author}</p>
                <p>价格: ${price}</p>
            </div>`;
    }

    // 将内容添加到HTML中
    document.getElementById("book-list").innerHTML = output;
  })
  .catch((error) => {
    console.error("读取XML数据时出错:", error);
  });
