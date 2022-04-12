const handleLocalStorage = () => {
    const data = {
        username: e.target.elements.username.value,
        password: e.target.elements.password.value
    }

    localStorage.setItem("name", data.username);
    localStorage.setItem("password", data.password);

    console.log(data);
}

export default handleLocalStorage;