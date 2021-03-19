const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})

app.listen(3000,function(){console.log('server is listening')})