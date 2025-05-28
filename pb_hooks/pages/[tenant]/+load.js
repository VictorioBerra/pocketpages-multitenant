/** @type {import('pocketpages').PageDataLoaderFunc} */
module.exports = function (api) {

  let tenant = $app.findFirstRecordByData("Tenants", "Identifier", api.params.tenant)

  return {
     tenant: {
      Id: tenant.id,
      Identifier: tenant.getString("Identifier"),
      Name: tenant.getString("Name"),
     }
  }
}