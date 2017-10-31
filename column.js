var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '2409',
  'X-Auth-Token': '913c630c8b50bb14d11bb7f5721cfd3en'
};

function Column(id, name) {
    this.id = id;
    this.name = name || 'No name given';
}

function Column(name) {
	var self = this;
	
	this.id = randomString();
	this.name = name;
	this.element = createColumn();

	function createColumn() {
		// TWORZENIE NOWYCH WĘZŁÓW
		var column = $('<div class="column"></div>');
		var columnTitle = $('<h2 class="column-title">' + self.name + '</h2>');
		var columnCardList = $('<ul class="card-list"></ul>');
		var columnDelete = $('<button class="btn-delete">x</button>');
		var columnAddCard = $('<button class="column-add-card">Dodaj kartę</button>');
		
		// PODPINANIE ODPOWIEDNICH ZDARZEŃ POD WĘZŁY
		columnDelete.click(function() {
    var self = this;
    $.ajax({
      url: baseUrl + '/column/' + self.id,
      method: 'DELETE',
      success: function(response){
        self.element.remove();
      }
    });})
		
		columnAddCard.click(function(event) {
	var cardName = prompt("Enter the name of the card");
	event.preventDefault();
	$.ajax({
        url: baseUrl + '/card',
        method: 'POST',
        data: {
              //body query
        },
        success: function() {
            //create a new client side card
        }
    });
});
			
			// KONSTRUOWANIE ELEMENTU KOLUMNY
		column.append(columnTitle)
			.append(columnDelete)
			.append(columnAddCard)
			.append(columnCardList);
			return column;
		}
	}
Column.prototype = {
	createCard: function(card) {
	  this.element.children('ul').append(card.element);
	},
	deleteColumn: function() {
		    var self = this;
		    $.ajax({
		      url: baseUrl + '/column/' + self.id,
		      method: 'DELETE',
		      success: function(response){
		        self.element.remove();
		      }
		    });
		},
};