const App = () => {
  this.data = {};
  const select = () => {
    this.data.form = document.getElementById("mainform");
    this.data.radio = document.querySelectorAll('input[name="degree"]');
    this.data.check = document.querySelectorAll('input[name="device"]');
    this.data.textbox = document.querySelectorAll(".textbox");
    this.data.select = document.querySelector("#cars");
  };

  select();

  const isNotEmpty = () => {
    let radioIsChecked = false;
    Array.from(this.data.radio).some(el => {
      radioIsChecked = el.checked;
      return el.checked;
    });
    if (!radioIsChecked) {
      alert("Please select your degree");
      return false;
    }

    let checkIsChecked = false;
    Array.from(this.data.check).some(el => {
      checkIsChecked = el.checked;
      return el.checked;
    });
    if (!checkIsChecked) {
      alert("Please select your device");
      return false;
    }

    let textIsFilled = Array.from(this.data.textbox).every(el => {
      return el.value.length !== 0;
    });
    if (!textIsFilled) {
      alert("Please enter your email and phone");
      return false;
    }

    if (this.data.select.value == "default") {
      alert("Please choose your connectivity");
      return false;
    }
    return true;
  };

  const matchesPattern = () => {
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      alert("enter valid email!");
      return false;
    }
    if (
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
        phone.value
      )
    ) {
      alert("enter valid phone!");
      return false;
    }

    return true;
  };

  const runChecks = () => {
    let a = isNotEmpty();
    let b = matchesPattern();
    return a && b;
  };

  const clear = () => {
    this.data.radio.forEach(el => {
      el.checked = false;
    });
    this.data.check.forEach(el => {
      el.checked = false;
    });
    this.data.textbox.forEach(el => {
      el.value = null;
    });
    this.data.select.value = "default";
  };

  const commands = {};

  commands.submit = document.querySelector('button[type="submit"]');
  commands.reset = document.querySelector('button[type="reset"]');

  commands.submit.addEventListener(
    "click",
    event => {
      event.preventDefault();
      const result = runChecks();
      if (result) alert("Success!");
    },
    {
      capture: true
    }
  );

  commands.reset.addEventListener(
    "click",
    event => {
      event.preventDefault();
      clear();
      alert("Items reset!");
    },
    {
      capture: true
    }
  );
};

window.onload = () => {
  App();
};
