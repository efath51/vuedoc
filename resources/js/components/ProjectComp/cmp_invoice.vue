<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Trash2 } from 'lucide-vue-next';
import { computed, reactive, ref } from 'vue';
// --- Reactive State ---

const logoPreview = ref<string | null>(null);

const invoice = reactive({
    from: 'Your Company Name\n123 Address St.\nCity, State, 12345',
    billTo: '',
    shipTo: '',
    id: `#${Math.floor(Math.random() * 10000)}`,
    date: new Date().toISOString().split('T')[0],
    paymentTerms: 'Net 30 Days',
    dueDate: '',
    phoneNumber: '',
    items: [{ description: '', quantity: '1', rate: '0', amount: '0' }],
    tax:'',
    discount:'',
    shipping:'',
    amountPaid:''
});

const items = ref([{ description: 'Item Name', quantity: 1, rate: 0, amount: 0 }]);

const tax = ref(0);
const discount = ref(0);
const shipping = ref(0);
const amountPaid = ref(0);

// --- Computed Properties for Automatic Calculations ---

const subtotal = computed(() => {
    return items.value.reduce((acc, item) => {
        item.amount = item.quantity * item.rate;
        return acc + item.amount;
    }, 0);
});

const total = computed(() => {
    const taxAmount = (subtotal.value * tax.value) / 100;
    return subtotal.value + taxAmount + shipping.value - discount.value;
});

const balanceDue = computed(() => total.value - amountPaid.value);

// --- Methods ---

function addItem() {
    items.value.push({ description: '', quantity: 1, rate: 0, amount: 0 });
}

function removeItem(index: number) {
    items.value.splice(index, 1);
}

function handleLogoUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            logoPreview.value = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    }
}
</script>

<template>
    <div class="min-h-screen bg-dark p-4 sm:p-6 md:p-8">
        <Card class="mx-auto max-w-4xl p-6 sm:p-8 md:p-10 dark:bg-stone-950 ">
            <CardHeader class="mb-10 p-0">
                <div class="flex flex-col justify-between  md:flex-row">
                    <div class="flex flex-col gap-4">
                        <div class="relative flex h-24 w-48 items-center justify-center rounded-lg border-2 border-dashed">
                            <img v-if="logoPreview" :src="logoPreview" alt="Logo Preview" class="h-full w-full object-contain" />
                            <Label v-else for="logo-upload" class="cursor-pointer text-muted-foreground hover:text-primary"> + Add Your Logo </Label>
                            <Input id="logo-upload" type="file" class="absolute inset-0 cursor-pointer opacity-0" @change="handleLogoUpload" />
                        </div>
                        <Textarea v-model="invoice.from" placeholder="Who is this invoice from?" class="h-24" />
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <Label for="bill-to">Bill To</Label>
                                <Textarea id="bill-to" v-model="invoice.billTo" placeholder="Who is this invoice to?" />
                            </div>
                            <div>
                                <Label for="ship-to">Ship To</Label>
                                <Textarea id="ship-to" v-model="invoice.shipTo" placeholder="(Optional)" />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-start gap-2 md:items-end">
                        <h1 class="text-right text-4xl font-bold uppercase">Invoice</h1>
                        <div class="grid grid-cols-2 gap-x-4 gap-y-2 text-right">
                            <Label class="font-semibold" for="invoice-id">#</Label>
                            <Input id="invoice-id" v-model="invoice.id" class="w-32 text-right" />
                            <Label class="font-semibold" for="date">Date</Label>
                            <Input id="date" v-model="invoice.date" type="date" class="w-32 text-right" />
                            <Label class="font-semibold" for="payment-terms">Payment Terms</Label>
                            <Input id="payment-terms" v-model="invoice.paymentTerms" class="w-32 text-right" />
                            <Label class="font-semibold" for="due-date">Due Date</Label>
                            <Input id="due-date" v-model="invoice.dueDate" type="date" class="w-32 text-right" />
                            <Label class="font-semibold" for="phone">Phone Number</Label>
                            <Input id="phone" v-model="invoice.phoneNumber" placeholder="+1 (123) 456-7890" class="w-32 text-right" />
                        </div>
                    </div>
                </div>
            </CardHeader>

            <CardContent class="mb-10 p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead class="w-1/2">Item Description</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Rate</TableHead>
                            <TableHead class="text-right">Amount</TableHead>
                            <TableHead class="w-12"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="(item, index) in items" :key="index">
                            <TableCell>
                                <Input v-model="item.description" placeholder="Item name" />
                            </TableCell>
                            <TableCell>
                                <Input v-model.number="item.quantity" type="number" class="w-20" />
                            </TableCell>
                            <TableCell>
                                <Input v-model.number="item.rate" type="number" class="w-24" />
                            </TableCell>
                            <TableCell class="text-right font-medium"> ${{ item.amount.toFixed(2) }}</TableCell>
                            <TableCell>
                                <Button variant="ghost" size="icon" @click="removeItem(index)">
                                    <Trash2 class="h-4 w-4 text-muted-foreground" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Button variant="outline" class="mt-4" @click="addItem">
                    <PlusCircle class="mr-2 h-4 w-4" />
                    Add Item
                </Button>
            </CardContent>

            <CardFooter class="flex-col items-end gap-8 p-0 md:flex-row md:justify-between">
                <div class="flex w-full flex-col gap-4 md:w-1/2">
                    <div>
                        <Label for="notes">Notes</Label>
                        <Textarea id="notes" placeholder="Any additional notes..." />
                    </div>
                    <div>
                        <Label for="terms">Terms</Label>
                        <Textarea id="terms" placeholder="Terms and conditions..." />
                    </div>
                </div>
                <div class="flex w-full max-w-sm flex-col gap-2 md:w-1/2">
                    <div class="flex justify-between">
                        <span class="text-muted-foreground">Subtotal</span>
                        <span class="font-medium">${{ subtotal.toFixed(2) }}</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <Label for="tax" class="text-muted-foreground">Tax (%)</Label>
                        <Input id="tax" v-model.number="tax" type="number" class="h-8 w-20" />
                    </div>
                    <div class="flex items-center justify-between">
                        <Label for="shipping" class="text-muted-foreground">Shipping ($)</Label>
                        <Input id="shipping" v-model.number="shipping" type="number" class="h-8 w-20" />
                    </div>
                    <div class="flex items-center justify-between">
                        <Label for="discount" class="text-muted-foreground">Discount ($)</Label>
                        <Input id="discount" v-model.number="discount" type="number" class="h-8 w-20" />
                    </div>
                    <div class="my-2 border-t"></div>
                    <div class="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>${{ total.toFixed(2) }}</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <Label for="amount-paid" class="text-muted-foreground">Amount Paid ($)</Label>
                        <Input id="amount-paid" v-model.number="amountPaid" type="number" class="h-8 w-20" />
                    </div>
                    <div class="mt-2 rounded-md bg-primary/10 p-2">
                        <div class="flex justify-between font-bold">
                            <span>Balance Due</span>
                            <span>${{ balanceDue.toFixed(2) }}</span>
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    </div>
</template>
