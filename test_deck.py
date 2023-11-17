from deck import Deck, Card

# Implementera tester ni anser lämpliga här. Motivera gärna varför de behövs (vad de testar och varför).


def test_card_init():
    card = Card(4, "FirstCard")
    assert(str(card) == "4F")

def test_card_eq():
    card1 = Card(4,"FirstCard")
    card2 = Card(4,"SecondCard")
    assert card1.__eq__(card2) == True

def test_card_lt():
    card1 = Card(4, "FirstCard")
    card2 = Card(2, "SecondCard")
    assert card2.__lt__(card1) == True

def test_card_gt():
    card1 = Card(4, "FirstCard")
    card2 = Card(2, "SecondCard")
    assert card1.__gt__(card2) == True

def test_deck_len():
    deck = Deck()
    assert deck.__len__() == 52

def test_deck_insert():
    card_list = [Card(1, "FirstCard"),Card(2,"SecondCard"), Card(2, "FirstCard"), Card(3, "FirstCard"), Card(4,"SecondCard"), Card(4,"ThirdCard"), Card(5, "FouthCard")]
    card = Card(3, "AnotherCard")
    card_list_after_insert = [Card(1, "FirstCard"),Card(2,"SecondCard"), Card(2, "FirstCard"),Card(3, "AnotherCard"), Card(3, "FirstCard"), Card(4,"SecondCard"), Card(4,"ThirdCard"), Card(5, "FouthCard")]
    assert Deck.insert(card_list,card) == card_list_after_insert

def test_deck_take():
    deck = Deck()
    deck.take()
    assert deck.__len__() == 51

def test_deck_put():
    deck = Deck()
    deck.put(Card(8, "NewCard"))
    assert deck.__len__() == 53
    assert Card(8,"NewCard") in deck.cards




