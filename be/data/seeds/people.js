/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex("people").del()
  await knex('people').insert([
    { name: 'Marc Tapp', goesBy:"Marc",age: "34", phone: "478-662-6609", address1:"118 Williamsburg Ln", city:"Woodstock", state: "GA", zip_code:00000},
    { name: 'Laci Summerlin', goesBy:"Laci",age: "35", phone: "", address1:"", city:"", state: "GA", zip_code:00000},
    { name: 'Nikki Diaz',goesBy:"Nikki", age: "36", phone: "", address1:"4765 Griffing Ave", city:"Midlothian", state: "TX", zip_code:00000},
    { name: 'Kim TenHagen',goesBy:"Kim", age: "55", phone: "719-439-7765", address1:" 217 Cart Path Way", city:"Bonaire", state: "GA", zip_code:00000},
    { name: 'Shirley Midgette', goesBy:"Shirley", age: "88", phone: "", address1:"1312 10th Street SouthEast", city:"Moultrie", state: "GA", zip_code:00000},
    { name: 'Chris Summerlin', goesBy:"Chris", age: "34", phone: "", address1:"", city:"", state: "GA", zip_code:00000}
  ]);
};
