package main

import (
	"database/sql"
	"github.com/go-sql-driver/mysql"
)

func main (){
	// O host é "mysql" porque este é o nome do container que está rodando o mysql
	db, err := sql.Open("mysql", "root:root@tcp(mysql:3306)/test")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	db.query("INSERT INTO user VALUES('maria','Maria Bastos','maria@gmail.com')")
}