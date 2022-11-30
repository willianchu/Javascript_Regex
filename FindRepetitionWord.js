// gets the separate words from the sentences
sentences = gets.to_i.times.map {gets}.join(' ')

// 
gets.to_i.times { puts sentences.scan(/\w#{gets.chomp}\w/).count }

// \w#