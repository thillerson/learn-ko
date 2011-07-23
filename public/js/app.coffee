$ ->
  beers = [
    {name: "Dragon's Milk", brewery: "New Holland Brewing Company", style: "Imperial Stout"},
    {name: "Oberon", brewery: "Bell's", style: "Wheat"},
    {name: "El Mole Ocho", brewery: "New Holland Brewery Company", style: "Mole Ale"},
  ]

  viewModel = {
    beers: ko.observableArray beers

    query: ko.observable ''

    search: (value) ->
      viewModel.beers.removeAll()
      viewModel.beers.push beer for beer in beers when beer.name.toLowerCase().indexOf(value.toLowerCase()) >= 0
  }
  viewModel.query.subscribe viewModel.search
  ko.applyBindings viewModel


