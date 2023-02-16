let menu = ["Rau xào", "Thịt luộc", "Gà rán"]
localStorage.setItem("menu", JSON.stringify(menu))

let input = document.getElementById("search-bar")

function search() {
    switch (input.value) {
        case "C":
            let C = prompt("Mời người dùng nhập món ăn muốn thêm vào menu:")
            if (C != null) {
                let current_menu = JSON.parse(localStorage.getItem("menu"))
                current_menu.push(C)
                localStorage.setItem("menu", JSON.stringify(current_menu))
            }
            else {
                alert("Bạn chưa nhập thông tin!")
            }
            break;
        case "R":
            let R = menu.toString()
            alert(R)
            break;
        case "U":
            let U = prompt("Mời người dùng nhập vào tên món ăn muốn update:")
            if (U != null) {
                let current_menu = JSON.parse(localStorage.getItem("menu"))
                current_menu.splice(current_menu.indexOf(U), 1)
                let U1 = prompt("Mời người dùng nhập vào tên món ăn mới:")
                if (U1 != null) {
                    current_menu.push(U1)
                    localStorage.setItem("menu", JSON.stringify(current_menu))
                }
                else {
                    alert("Bạn chưa nhập thông tin!")
                }
            }
            else {
                alert("Bạn chưa nhập thông tin!")
            }
            break;
        case "D":
            let D = prompt("Mời người dùng nhập vào tên món ăn muốn xóa:")
            if (D != null) {
                let current_menu = JSON.parse(localStorage.getItem("menu"))
                current_menu.splice(current_menu.indexOf(D), 1)
                localStorage.setItem("menu", JSON.stringify(current_menu))
            }
            else {
                alert("Bạn chưa nhập thông tin!")
            }
            break;
        default:
            alert("Bạn đang không nhập đúng ký tự!");
    }
}