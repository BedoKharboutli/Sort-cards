from deck import Deck, Card

# Implementera tester ni anser lämpliga här. Motivera gärna varför de behövs (vad de testar och varför).


def test_card():
    # Test här
    card = Card(4, "D")
    assert card.__str__ == "4D"


def test_deck():
    # Test här
    deck = Deck()
    assert len(deck) == 52


def shuffle_deck():
    deck = Deck()
    shuffle_deck = deck.shuffle()
    assert not deck == shuffle_deck


def test_take():
    deck = Deck()
    deck.take()
    assert len(deck) == 51


def test_put():
    card = Card(7, "D")
    deck = Deck()
    deck.put(card)
    assert len(deck) == 53
