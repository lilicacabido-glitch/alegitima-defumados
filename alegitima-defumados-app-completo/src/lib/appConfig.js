export const APP = {
  name: 'A legítima Defumados',
  city: 'Petrópolis',
  deliveryOrigin: 'Cascatinha, Petrópolis',
  saturdayAllowed: true,
  sundayAllowed: false,
  minBusinessDays: 1,
  itemsPerPage: 30,
  whatsappAdmin: '5524xxxxxxxxx', // edite no Admin
  whatsappRider: '5524yyyyyyyyy', // edite no Admin
  thankYou: 'Seu pedido chegou! Muito obrigado por escolher A legítima Defumados — esperamos que você aproveite. Se quiser, avalie sua compra para nos ajudar a melhorar cada dia mais!',
  features: {
    coupons: true,
    wishlist: true,
    backInStock: true,
    reviews: true,
    twoTierPricing: true,
    minWeightPerItem: true,
    madeToOrder: true,
    resellerSignup: true,
    recipes: true,
    charts: true,
    maintenance: true,
    aboutEditable: true,
    crossSell: true,
    promotions: true,
    newArrivals: true,
    deliveryOnlyPetropolis: true,
    petrópolisFreightTable: true
  },
  freight: [
    { dest: 'Centro', price: 10 },
    { dest: 'Quitandinha', price: 12 },
    { dest: 'Valparaíso', price: 12 },
    { dest: 'Itaipava', price: 16 },
    { dest: 'São Sebastião', price: 14 },
    { dest: 'Carangola', price: 14 }
  ]
}
