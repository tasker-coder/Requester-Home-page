import faker from 'faker'

const requesterList = [
    { 'key': 0,
      'avatar' : faker.image.avatar(),
      'name' : faker.name.firstName(),
      'discription' : faker.lorem.sentence() 
    },
    {   'key': 1,
        'avatar' : faker.image.avatar(),
        'name' : faker.name.firstName(),
        'discription' : faker.lorem.sentence() 
      },
      { 'key': 2,
        'avatar' : faker.image.avatar(),
        'name' : faker.name.firstName(),
        'discription' : faker.lorem.sentence() 
      },
      { 'key': 3,
        'avatar' : faker.image.avatar(),
        'name' : faker.name.firstName(),
        'discription' : faker.lorem.sentence()
      }
      ,
      {   'key': 4,
          'avatar' : faker.image.avatar(),
          'name' : faker.name.firstName(),
          'discription' : faker.lorem.sentence()
        },

        { 'key': 5,
        'avatar' : faker.image.avatar(),
        'name' : faker.name.firstName(),
        'discription' : faker.lorem.sentence()
      }
]

export default requesterList