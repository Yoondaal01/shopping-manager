const ShopInput = () => {

    return (
        <>
            <form>
                <input type="text" value={shopName} placeholder="Add a shop"
                onChange={(e) => setShopName(e.target.value)}
                />
                <button type="submit" onClick={addShop}>Add Shopp</button>
            </form>

            <form>
                <input type="text" value={itemName} placeholder="Add an item"
                onChange={(e) => setItemName(e.target.value)}
                />

                {/*Choose a department*/}
            <select 
                value={priority} onChange={(e) => setPriority(e.target.value)}
                required
                >
                <option value="" disabled hidden>VChoose department</option>
                <option value="frugt/grønt">Frugt/Grønt</option>
                <option value="brød">Brød</option>
                <option value="kød">Kød</option>
                <option value="konserves">Konserves</option>
                <option value="nonfood">NonFood</option>
                <option value="mejeri">Mejeri</option>
                <option value="frost">Frost</option>
            </select>

                <select
                    value={SelectedShop} onChange={(e) => setSelectedShop(e.target.value)}
                    required
                >
                    <option value="" disabled hidden>Choose a shop</option>
                    {shops.map((shop, index) => (
                        <option key={index} value={shop}>{shop}</option>
                    ))}
                </select>

                <button type="submit" onClick={addItem}>Add Item</button>
            </form>
        </>
    );
}


export default ShopInput;