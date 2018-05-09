#!/bin/python3

import sys

def getPercentCost(amount, rate):
    return amount * (rate/100);


def totalCost(amount, tip_percent, tax_percent):
    tipAmount = getPercentCost(amount, tip_percent)
    taxAmount = getPercentCost(amount, tax_percent)
    return amount + tipAmount +taxAmount


if __name__ == "__main__":
    meal_cost = float(input().strip())
    tip_percent = int(input().strip())
    tax_percent = int(input().strip())
    total_meal_cost = round(totalCost(meal_cost, tip_percent, tax_percent))
    print("The total meal cost is {0} dollars.".format(total_meal_cost))
