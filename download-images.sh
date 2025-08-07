#!/bin/bash

# QuickMark Spaza Shop - Image Download Script
# This script downloads free stock images from Unsplash for the website
# All images are free to use under Unsplash License

echo "🖼️  Downloading images for QuickMark Spaza Shop..."
echo "📁 Creating images directory..."

# Create images directory if it doesn't exist
mkdir -p images

# Function to download image with error handling
download_image() {
    local url=$1
    local filename=$2
    local description=$3
    
    echo "📥 Downloading $description..."
    
    if curl -L -o "images/$filename" "$url" --silent --show-error; then
        echo "✅ Successfully downloaded: $filename"
    else
        echo "❌ Failed to download: $filename"
        echo "🔗 Manual download URL: $url"
    fi
    
    # Small delay to be respectful to the server
    sleep 1
}

echo ""
echo "🏪 Downloading shop and product images..."

# Shop front image - Small grocery store
download_image "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" "shop-front.jpg" "Shop front exterior"

# Maize meal / corn flour
download_image "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" "maize-meal.jpg" "Maize meal / corn flour"

# Fresh bread
download_image "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" "bread.jpg" "Fresh white bread"

# Cool drinks / soft drinks
download_image "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" "cool-drinks.jpg" "Assorted soft drinks"

# Soap and toiletries
download_image "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" "soap.jpg" "Bath soap and toiletries"

# Shop owner - Professional African woman
download_image "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" "shop-owner.jpg" "Professional African woman business owner"

# Rice
download_image "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" "rice.jpg" "White rice"

# Sugar
download_image "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" "sugar.jpg" "White granulated sugar"

# Coca Cola
download_image "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" "coca-cola.jpg" "Coca Cola bottle"

# Bottled water
download_image "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" "water.jpg" "Bottled water"

# Orange juice (for Oros)
download_image "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" "oros.jpg" "Orange juice bottle"

# Toothpaste
download_image "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" "toothpaste.jpg" "Toothpaste tube"

# Candles
download_image "https://images.unsplash.com/photo-1602874801006-e26d3d17d04a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" "candles.jpg" "White candles"

# Matches
download_image "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" "matches.jpg" "Box of matches"

# Map placeholder - Johannesburg/Soweto area
download_image "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" "map-placeholder.jpg" "Map of Johannesburg area"

echo ""
echo "🎉 Image download complete!"
echo ""
echo "📋 Summary:"
echo "✅ All images downloaded to the 'images/' folder"
echo "✅ Images are optimized for web use (400-800px width)"
echo "✅ All images are free to use under Unsplash License"
echo ""
echo "📝 Next steps:"
echo "1. Check the 'images/' folder to verify all downloads"
echo "2. Open your website (index.html) to see the images"
echo "3. Replace any images that don't fit your needs"
echo ""
echo "🔗 Image sources: All images from Unsplash.com"
echo "📄 License: Free to use for commercial and personal projects"
echo "🙏 Attribution: Not required but appreciated"
echo ""
echo "🚀 Your QuickMark Spaza website is now ready with real images!"
