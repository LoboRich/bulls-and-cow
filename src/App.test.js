import { render, screen } from '@testing-library/react';

import App, {
  checkCombination,
  generateRandomNumber,
  isUnique
} from './App'

test('render app', () => {
  render(<App />);
  
})

describe('Check combination matcher', () => {
  const secret = [5,2,1,8]
  it('should return 2 bull 2 cows', () => {
    const result = checkCombination(secret, [2,5,1,8])
    expect(result.bull === 2 && result.cow === 2).toBe(true)
    expect(result.bull).toBe(2)
    expect(result.cow).toBe(2)
  })
  it('should return 0 bull 0 cows', () => {
    const result = checkCombination(secret, [9,7,6,0])
    expect(result.bull === 0 && result.cow ===0).toBe(true)
    expect(result.bull).toBe(0)
    expect(result.cow).toBe(0)
  })
  it('should return 4 bulls 0 cow', () => {
    const result = checkCombination(secret, [5,2,1,8])
    expect(result.bull === 4 && result.cow === 0).toBe(true)
    expect(result.bull).toBe(4)
    expect(result.cow).toBe(0)
  })
  // it('should return Bulls Eye on title', () => {
  //   const result = checkCombination(secret, [5,2,1,8])
  //   const linkElement = screen.getByText('Bulls Eye!');
  //   expect(linkElement).toBeInTheDocument(); 


  // })
})

describe('Generate Random Unique number', () => {
  it('should generate a random number', () => {
    const random = generateRandomNumber()
    expect(random).not.toBe(null)
  })
  it('should be unique', () => {
    const random = generateRandomNumber()
    expect(isUnique(1234)).toBe(true)
    expect(isUnique(1122)).toBe(false)
  })
  it('should have a 4 digit number', () => {
    const random = generateRandomNumber()
    expect(random.length).toBe(4)
  })
})


describe('Check win validation', () => {
  it('should check possible matches', () => {
    const random = generateRandomNumber()
    const guess = generateRandomNumber()
    const result = checkCombination(random, guess)
    expect(typeof result).toBe('object')
    expect(result.guess && result.cow >= 0 && result.bull >= 0).toBe(true)
  })
})
