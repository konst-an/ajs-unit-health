import healthStatus from '../src/health.js';

test("health > 50", () => {
    const result = healthStatus({name: 'Маг', health: 90});
    expect(result).toBe('healthy');
});

test("health between 15 and 50", () => {
    const result = healthStatus({name: 'Маг', health: 40});
    expect(result).toBe('wounded');
});

test("health < 15", () => {
    const result = healthStatus({name: 'Маг', health: 5});
    expect(result).toBe('critical');
});
