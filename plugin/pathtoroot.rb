module Jekyll
	module PathToRoot
		def ptr(path_str)
			path_str += "foobar"
			depth = path_str.split(/\//).length - 2
			path = ""
			if depth == 0 then
				path = "."
			else
				for num in 1..depth do
					path += ".."
					if num < depth then
						path += "/"
					end
				end
			end
			path
		end
	end
end

Liquid::Template.register_filter(Jekyll::PathToRoot)