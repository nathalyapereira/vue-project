export const useItemsStore = defineStore('items', () => {
    const items = ref(['a', 'b', 'c'])

    return {
        items,
    }
})
