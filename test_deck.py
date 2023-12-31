from deck import Deck, Card

# Implementera tester ni anser lämpliga här. Motivera gärna varför de behövs (vad de testar och varför).


def test_card_init():
    # Denna test skapar ett kort och kontrollerar om dess strängrepresentation är korrekt
    card = Card(4, "FirstCard")
    assert(str(card) == "4F")

def test_card_eq():
    # denna test kontrollerar likheten mellan två kort föratt säkerställa att två kort med samma värden anses vara lika.
    card1 = Card(4,"FirstCard")
    card2 = Card(4,"SecondCard")
    assert card1 == card2

def test_card_lt():
    # denna test kontrollerar jämförelse för mindre än (__lt__) mellan två kort och att det fungerar korrekt
    card1 = Card(4, "FirstCard")
    card2 = Card(2, "SecondCard")
    assert card2 < card1

def test_card_gt():
    # denna test kontrollerar jämförelse för större än (__gt__) mellan två kort och att det fungerar korrekt
    card1 = Card(4, "FirstCard")
    card2 = Card(2, "SecondCard")
    assert card1 > card2

def test_deck_len():
    # denna test testar om längden av kortleken (Deck) är rätt antal kort från början.
    deck = Deck()
    assert deck.__len__() == 52

def test_deck_insert():
    # Testet kontrollerar att infogandet av ett kort i (Deck) fungerar som förväntat. Detta är användbart när du lägger till kort under spelets gång.
    card_list = [Card(1, "FirstCard"),Card(2,"SecondCard"), Card(2, "FirstCard"), Card(3, "FirstCard"), Card(4,"SecondCard"), Card(4,"ThirdCard"), Card(5, "FouthCard")]
    card = Card(3, "AnotherCard")
    card_list_after_insert = [Card(1, "FirstCard"),Card(2,"SecondCard"), Card(2, "FirstCard"),Card(3, "AnotherCard"), Card(3, "FirstCard"), Card(4,"SecondCard"), Card(4,"ThirdCard"), Card(5, "FouthCard")]
    assert Deck.insert(card_list,card) == card_list_after_insert

def test_deck_take():
    # denna test testar om att ta ett kort från kortleken (Deck) minskar kortlekens antal.
    deck = Deck()
    deck.take()
    assert deck.__len__() == 51

def test_deck_put():
    # denna test testar om att lägga till ett kort på kortleken (Deck) ökar kortlekens antal.
    deck = Deck()
    deck.put(Card(8, "NewCard"))
    assert deck.__len__() == 53
    assert Card(8,"NewCard") in deck.cards
def test_deck_sort():
    # denna test testar om sorteringsmetoden för kortleken (sort) fungerar som förväntat
    deck = Deck()
    deck.sort()
    # ['Hearts', 'Diamonds', 'Spades', 'Clubs']
    actual = [Card(1,"Hearts"), Card(1,'Diamonds'),Card(1,'Spades'), Card(1,'Clubs'),
              Card(2,"Hearts"), Card(2,'Diamonds'),Card(2,'Spades'), Card(2,'Clubs'),
              Card(3,"Hearts"), Card(3,'Diamonds'),Card(3,'Spades'), Card(3,'Clubs'),
              Card(4,"Hearts"), Card(4,'Diamonds'),Card(4,'Spades'), Card(4,'Clubs'),
              Card(5,"Hearts"), Card(5,'Diamonds'),Card(5,'Spades'), Card(5,'Clubs'),
              Card(6,"Hearts"), Card(6,'Diamonds'),Card(6,'Spades'), Card(6,'Clubs'),
              Card(7,"Hearts"), Card(7,'Diamonds'),Card(7,'Spades'), Card(7,'Clubs'),
              Card(8,"Hearts"), Card(8,'Diamonds'),Card(8,'Spades'), Card(8,'Clubs'),
              Card(9,"Hearts"), Card(9,'Diamonds'),Card(9,'Spades'), Card(9,'Clubs'),
              Card(10,"Hearts"), Card(10,'Diamonds'),Card(10,'Spades'), Card(10,'Clubs'),
              Card(11,"Hearts"), Card(11,'Diamonds'),Card(11,'Spades'), Card(11,'Clubs'),
              Card(12,"Hearts"), Card(12,'Diamonds'),Card(12,'Spades'), Card(12,'Clubs'),
              Card(13,"Hearts"), Card(13,'Diamonds'),Card(13,'Spades'), Card(13,'Clubs')]

    assert deck.cards == actual





