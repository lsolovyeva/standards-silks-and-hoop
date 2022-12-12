var isEnabled = false;


function validatelogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
	  if (username == "arriba" && password == "arriba") {
        //alert("Вход в систему выполнен успешно!");
        document.getElementById('infoContainer').style.display = "block";
        document.getElementById('loginContainer').style.display = "none";
		    isEnabled = true;
        return true;
    } else {
        //alert("Ошибка: неправильный логин или пароль.");
        document.getElementById('alertContainer1').style.display = "block";
        isEnabled = false;
        return false;
    }
}

function closeWarningWindow(containerid) {
	document.getElementById(containerid).style.display = "none";
}

function onLoadBody() {
    if (localStorage.getItem('testObject')) {
        isEnabled = true;
        document.getElementById("loginContainer").style.display = "none"; 
        return true;
    }
}

function backToMainPage() {
    localStorage.setItem('testObject', true);
	isEnabled = true;
}

function isbuttonenabled(buttonid) {
    if(isEnabled) {
        if(buttonid == btn1) {
            return window.open("silks-beginner.html","_self");
        } else if(buttonid == btn2) {
            return window.open("silks-intermediate.html","_self");
        } else if(buttonid == btn3) {
            return window.open("silks-advanced.html","_self");
        } else if(buttonid == btn4) {
            return window.open("hoop-beginner.html","_self");
        } else if(buttonid == btn5) {
            return window.open("hoop-intermediate.html","_self");
        } else if(buttonid == btn6) {
            return window.open("hoop-advanced.html","_self");
        } else {
            return window.open("#","_self");
        }
    } else {
        //alert("Ошибка доступа: сначала войдите в систему.");
        document.getElementById('alertContainer2').style.display = "block";
    }
}
