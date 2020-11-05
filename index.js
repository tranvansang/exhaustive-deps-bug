export const useAsyncEffect = (effect, deps) => useEffect(
	() => void (async () => {
		try {
			await effect()
		} catch (e) {
			// report error
			console.error(e)
		}
	})(),
	deps
)

