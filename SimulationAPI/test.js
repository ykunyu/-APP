const Mock = require("mockjs")
Mock.mock(/\/user/, {
    info: {
        name: Mock.Random.cname(),
        "age|12-38": 1,
        "sex|1": ["male", "female"]
    }
})

