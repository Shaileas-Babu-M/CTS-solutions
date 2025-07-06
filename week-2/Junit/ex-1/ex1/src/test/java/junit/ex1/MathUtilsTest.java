package junit.ex1;

import static org.junit.Assert.*;
import org.junit.Test;

public class MathUtilsTest {

    MathUtils mathUtils = new MathUtils();

    @Test
    public void testAdd() {
        assertEquals(5, mathUtils.add(2, 3));
    }

    @Test
    public void testMultiply() {
        assertEquals(12, mathUtils.multiply(3, 4));
    }

    @Test
    public void testIsPositive() {
        assertTrue(mathUtils.isPositive(5));
        assertFalse(mathUtils.isPositive(-3));
    }
}
