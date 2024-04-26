const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};
const shuffle = (array, swaps) => {
    for (let i = 0; i < swaps; i++) {
        const index1 = Math.floor(Math.random() * array.length);
        const index2 = Math.floor(Math.random() * array.length);
        swap(array, index1, index2);
    }
};
const bubble_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
};
const selection_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let min_index = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[min_index]) {
                min_index = j;
            }
        }
        swap(array, i, min_index);
    }
};
const quick_sort = (array, low, high) => {
    if (low < high) {
        const pivot = partition(array, low, high);
        quick_sort(array, low, pivot - 1);
        quick_sort(array, pivot + 1, high);
    }
};
const partition = (array, low, high) => {
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return i + 1;
};
