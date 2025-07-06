package com.example;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // 1. Mock the external API
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // 2. Stub the getData method
        when(mockApi.getData()).thenReturn("Mock Data");

        // 3. Use the mock in your service
        MyService service = new MyService(mockApi);

        // 4. Assert the expected result
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
}
