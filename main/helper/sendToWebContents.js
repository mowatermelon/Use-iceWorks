module.exports = ((e, ...s) => {
	e && !e.isDestroyed() && e.webContents.send.apply(e.webContents, s)
});