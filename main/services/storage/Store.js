const e = require("electron-store"), s = require("events");
class t extends s {
    constructor(s) {
        super(), this.namespace = s, this.store = new e
    }
    set(e) {
        this.store.set(`$ {
            this.namespace
        } - srouce`, e)
    }
    get() {
        return this.store.get(`$ {
            this.namespace
        } - srouce`)
    }
    add(e) {
        let s = this.store.get(`$ {
            this.namespace
        } - srouce`) || [];
        (s = s.filter(s => s !== e)).unshift(e), this.store.set(`$ {
            this.namespace
        } - srouce`, s)
    }
    remove(e) {
        let s = this.store.get(`$ {
            this.namespace
        } - srouce`) || [];
        Array.isArray(s) && (s = s.filter(s => s !== e), this.store.set(`$ {
            this.namespace
        } - srouce`, s))
    }
    has(e) {
        return (this.store.get(`$ {
            this.namespace
        } - srouce`) || []).some(s => s === e)
    }
    delete() {
        this.store.delete(`$ {
            this.namespace
        } - srouce`)
    }
    get dataSource() {
        return this.store.get(`$ {
            this.namespace
        } - srouce`)
    }
}
module.exports = t;