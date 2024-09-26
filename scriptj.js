
fetch("userProfiles.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("网络响应有误");
    }
    return response.json();
  })
  .then((data) => {
   
    const users = data.users;
    let output = "";

    
    users.forEach((user) => {
      output += `
                <div>
                    <h2>${user.firstName} ${user.lastName}</h2>
                    <p>邮箱: ${user.email}</p>
                    <p>出生日期: ${user.dateOfBirth}</p>
                    <p>地址: ${user.address.street}, ${user.address.city}, ${
        user.address.state
      }, ${user.address.zipCode}</p>
                    <p>主题: ${user.preferences.theme}</p>
                    <p>语言: ${user.preferences.language}</p>
                    <p>通知偏好: ${
                      user.preferences.notifications ? "开启" : "关闭"
                    }</p>
                    <p>订阅新闻简报: ${
                      user.preferences.subscription ? "是" : "否"
                    }</p>
                </div>
                <hr>
            `;
    });

   
    document.getElementById("user-list").innerHTML = output;
  })
  .catch((error) => {
    console.error("读取JSON数据时出错:", error);
  });
