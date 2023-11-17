from deck import Deck, Card

# Implementera tester ni anser lämpliga här. Motivera gärna varför de behövs (vad de testar och varför).


def test_card_init():
    card = Card(4, "FirstCard")
    assert(str(card) == "4F")

def test_card_eq():
#Det testar om metoden __eq__ (jämförelse av likhet) fungerar korrekt för två kort med samma värden.
    card1 = Card(4,"FirstCard")
    card2 = Card(4,"SecondCard")
    assert card1.__eq__(card2) == True

def test_card_lt():
    #Det testar om metoden __lt__ (mindre än) fungerar korrekt för två kort med olika värden.
    card1 = Card(4, "FirstCard")
    card2 = Card(2, "SecondCard")
    assert card2.__lt__(card1) == True

def test_card_gt():
    #Det testar om metoden __gt__ (större än) fungerar korrekt för två kort med olika värden.
    card1 = Card(4, "FirstCard")
    card2 = Card(2, "SecondCard")
    assert card1.__gt__(card2) == True

def test_deck_len():
    #Det testar om metoden __len__ för Deck returnerar korrekt antal kort i kortleken.
    deck = Deck()
    assert deck.__len__() == 52

def test_deck_insert():
    #Det testar när man lägger till ett kort på rätt plats i kortleken, det är viktigt föratt säkerställa att de hamnar på rätt plats.
    card_list = [Card(1, "FirstCard"),Card(2,"SecondCard"), Card(2, "FirstCard"), Card(3, "FirstCard"), Card(4,"SecondCard"), Card(4,"ThirdCard"), Card(5, "FouthCard")]
    card = Card(3, "AnotherCard")
    card_list_after_insert = [Card(1, "FirstCard"),Card(2,"SecondCard"), Card(2, "FirstCard"),Card(3, "AnotherCard"), Card(3, "FirstCard"), Card(4,"SecondCard"), Card(4,"ThirdCard"), Card(5, "FouthCard")]
    assert Deck.insert(card_list,card) == card_list_after_insert

def test_deck_take():
    #Det testar om metoden take() för Deck minskar antalet kort i kortleken from 52 till 51.
    deck = Deck()
    deck.take()
    assert deck.__len__() == 51

def test_deck_put():
     #Det testar om metoden put() för Deck höjer antalet kort i kortleken from 52 till 53 när man lägger till ett kort.
    deck = Deck()
    deck.put(Card(8, "NewCard"))
    assert deck.__len__() == 53
    assert Card(8,"NewCard") in deck.cards




