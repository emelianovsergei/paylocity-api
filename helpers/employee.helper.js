import supertest from 'supertest'
import 'dotenv/config'

class EmployeeHelper {
  response

  async create() {
    await supertest(process.env.BASE_URL)
      .post('/Prod/api/employees')
      .send({firstName: "John", lastName: "Smith", dependants: 0})
      .set('Authorization', `Basic ${process.env.TOKEN}` )
      .then(res => {
        this.response = res
      })
  }

  async delete(id) {
    await supertest(process.env.BASE_URL)
      .delete(`/Prod/api/employees/${id}`)
      .set('Authorization', `Basic ${process.env.TOKEN}`)
      .then(res => {
        this.response = res
      })
  }


  async getById(id) {
    await supertest(process.env.BASE_URL)
      .get(`/Prod/api/employees/${id}`)
      .set('Authorization', `Basic ${process.env.TOKEN}`)
      .then(res => {
        this.response = res
      })

  }
  async getAll() {
    await supertest(process.env.BASE_URL)
      .get('/Prod/api/employees')
      .set('Authorization', `Basic ${process.env.TOKEN}`)
      .then(res => {
        this.response = res
      })
  }

  async updateById(id) {
    await supertest(process.env.BASE_URL)
      .put('/Prod/api/employees')
      .send({id: `${id}`,firstName: "John", lastName: "Smith", dependants: 1})
      .set('Authorization', `Basic ${process.env.TOKEN}`)
      .then(res => {
        this.response = res
      })

  }
}

export default EmployeeHelper