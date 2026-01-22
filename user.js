
function login(username) {
    console.log(`User ${username} logged in`);
}

function search(username, item) {
    console.log(`User ${username} searched for ${item}`);
}

function logout(username) {
    console.log(`User ${username} logged out`);
}

module.exports = {
    login,
    search,
    logout
};
