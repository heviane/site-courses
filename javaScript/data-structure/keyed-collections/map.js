const getAdmins = (map) => {
	let admins = [];
    // iterando um map
	for ([key, value] of map) {
		if (value === 'ADMIN') {
            // adicionando os itens a um array
			admins.push(key);
		}
	}
	return admins;
};

// declarando um map
const userRoles = new Map();

// mockando o map
userRoles.set('Stephany', 'SUDO');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Elvira', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Guilherme', 'USER');

console.log(getAdmins(userRoles));