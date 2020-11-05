export const useEffectWithPrevDeps = (effect, deps) => {
	const depsRef = useRef()
	useEffect(
		() => {
			const {current} = depsRef
			depsRef.current = deps
			return effect(current)
		},
		deps
	)
}

