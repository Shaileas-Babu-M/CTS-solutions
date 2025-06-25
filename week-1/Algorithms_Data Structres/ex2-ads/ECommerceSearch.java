import java.util.Arrays;

public class ECommerceSearch {

    static class Product {
        int productId;
        String productName;
        String category;

        public Product(int productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        public String toString() {
            return "[" + productId + ", " + productName + ", " + category + "]";
        }
    }

    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.productId == targetId) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(104, "Mouse", "Electronics"),
            new Product(101, "Laptop", "Electronics"),
            new Product(103, "T-Shirt", "Clothing"),
            new Product(102, "Shoes", "Footwear")
        };

        Product[] sortedProducts = Arrays.copyOf(products, products.length);
        Arrays.sort(sortedProducts, (a, b) -> Integer.compare(a.productId, b.productId));

        Product result1 = linearSearch(products, 103);
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Not Found"));

        Product result2 = binarySearch(sortedProducts, 103);
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Not Found"));
    }
}
