from django.shortcuts import render, redirect
from .models import Product, Category
from .forms import OrderForm

def product_list(request):
    products = Product.objects.all()
    return render(request, 'ecommerce_app/product_list.html', {'products': products})

def product_detail(request, pk):
    product = Product.objects.get(pk=pk)
    return render(request, 'ecommerce_app/product_detail.html', {'product': product})

def order_create(request):
    if request.method == 'POST':
        form = OrderForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('order_success')
    else:
        form = OrderForm()
    return render(request, 'ecommerce_app/order_create.html', {'form': form})

def order_success(request):
    return render(request, 'ecommerce_app/order_success.html')