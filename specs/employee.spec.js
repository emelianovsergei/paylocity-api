import EmployeeHelper from '../helpers/employee.helper'
import { expect } from 'chai'
import {getRandomItem} from '../helpers/common.helper'

describe('Employees', function() {
  let employeeHelper = new EmployeeHelper()
  let employeeId


  before(async function(){
    await employeeHelper.create()
    employeeId = employeeHelper.response.body.id
  })

  describe('Employee creation', function() {

    it('response status code is 200', function() {
      expect(employeeHelper.response.statusCode).to.eq(200)
    })

    it('response body contains employee id',function () {
      expect(employeeHelper.response.body.id).not.to.be.undefined
    })

    it('response body contains 52000 salary',function () {
      expect(employeeHelper.response.body.salary).to.eq(52000)
    })
  })

  describe('Get Employee by ID', function() {
    before(async function(){
      await employeeHelper.getById(employeeId)
    })

    it('response status code is 200', function() {
      expect(employeeHelper.response.statusCode).to.eq(200)
    })

    it('response body contains employee id', function() {
      expect(employeeHelper.response.body.id).not.to.be.undefined
    })

    it('response body contains 52000 salary', function() {
      expect(employeeHelper.response.body.salary).to.eq(52000)
    })
  })

  describe('Update Employee by ID', function() {
    before(async function(){
      await employeeHelper.updateById(employeeId)
    })

    it('response status code is 200', function() {
      expect(employeeHelper.response.statusCode).to.eq(200)
    })

    it('response body contains changed dependants equal to 1', function() {
      expect(employeeHelper.response.body.dependants).to.eq(1)
    })

  })

  describe('Get all employees', function() {
    before(async function(){
      await employeeHelper.create()
      await employeeHelper.getAll()
    })

    it('response status code is 200', function() {
      expect(employeeHelper.response.statusCode).to.eq(200)
    })

    it('response body contains list of 2 or more items', function() {
      expect(employeeHelper.response.body.length).to.be.at.least(2)
    })

    it('response body array item contains employee id', function() {
      expect(getRandomItem(employeeHelper.response.body).id).not.to.be.undefined
    })

    it('response body array item contains 52000 salary', function() {
      expect(getRandomItem(employeeHelper.response.body).salary).not.to.be.undefined
    })
  })

  describe('Deletion of Employees', function() {
    before(async function(){
      await employeeHelper.delete(employeeId)
    })

    it('response status code is 200', function() {
      expect(employeeHelper.response.statusCode).to.eq(200)
    })
  })


})