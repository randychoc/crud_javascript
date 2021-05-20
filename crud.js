var crud = new (function () {
  this.el = document.getElementById("tasks");
  this.tasks = [
    "Native English",
    "Slack App",
    "CMMI",
    "Learn Jest",
    "Practice Playwright",
    "Post on Blogger",
    "Edit YouTube Video",
    "Star working with ReactJS", 
    "Learn Docker"
  ];

  this.FetchAll = () => {
    var data = "";
    if (this.tasks.length > 0) {
      for (let i = 0; i < this.tasks.length; i++) {
        //open row
        data += "<tr>";
        //array index
        data += `<th scope="row"> ${i + 1} </th>`;
        //array item
        data += "<td>" + this.tasks[i] + "</td>";
        //edit buttom
        data +=
          '<td><button onclick="crud.Edit(' +
          i +
          ')" class="btn btn-warning">Edit</button></td>';
        //delete button
        data +=
          '<td><button onclick="crud.Delete(' +
          i +
          ')" class="btn btn-danger">Delete</button></td>';
        // close row
        data += "</tr>";
      }
      this.Count(this.tasks.length);
      return (this.el.innerHTML = data);
    } else {
      this.Count(this.tasks.length);
    }
  };

  // Add Function
  this.Add = () => {
    el = document.getElementById("add-todo");
    var task = el.value;
    if (task.trim() == "") {
      alert("Campo vacio.");
    } else if (task) {
      this.tasks.push(task.trim());
      CleanInput();
      this.FetchAll();
    }
  };
  // Edit Function
  this.Edit = (item) => {
    el = document.getElementById("edit-todo");
    el.value = this.tasks[item];
    document.getElementById("edit-box").style.display = "block";
    self = this;
    // Save Function
    document.getElementById("save-edit").onsubmit = function () {
      var task = el.value;
      if (task.trim() == "") {
        alert("No puede guardar un campo vacio.");
      } else if (task) {
        self.tasks.splice(item, 1, task.trim());
        self.FetchAll();
        CleanInput();
        CloseInput();
      }
    };
  };
  this.Delete = (item) => {
    this.tasks.splice(item, 1);
    this.el.innerHTML = "";
    this.FetchAll();
  };
  this.Count = (cont) => {
    let el = document.getElementById("counter");
    var name = "Tasks";
    if (cont) {
      if (cont == 1) {
        name = "Task";
      }
      el.innerHTML = `<h3>You have ${cont} ${name} </h3>`;
    } else {
      el.innerHTML = `<h3>You have No ${name} </h3>`;
    }
  };
})();

crud.FetchAll();
CleanInput();

function CleanInput() {
  document.getElementById("add-todo").value = "";
}
function CloseInput() {
  document.getElementById("edit-box").style.display = "none";
}
