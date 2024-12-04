searchState.loadedDescShard("axfs", 0, "ArceOS filesystem module.\nThe block size of the file system.\n<code>std::fs</code>-like high-level filesystem manipulation operations.\nLow-level filesystem operations.\nInitializes filesystems by block devices.\nBlock device\nCharacter device\nSets the offset to the current position plus the specified …\nDirectory\nA builder used to create directories in various manners.\nEntries returned by the <code>ReadDir</code> iterator.\nSets the offset to the size of this object plus the …\nFIFO (named pipe)\nAn object providing access to an open file on the …\nRegular file\nA structure representing a type of file with accessors for …\nMetadata information about a file.\nOptions and flags which can be used to configure how a …\nRepresentation of the various permissions on a file.\nThe <code>Read</code> trait allows for reading bytes from a source.\nIterator over the entries in a directory.\nThe <code>Seek</code> trait provides a cursor which can be moved within …\nEnumeration of possible methods to seek within an I/O …\nSocket\nSets the offset to the provided number of bytes.\nSymbolic link\nA trait for objects which are byte-oriented sinks.\nSets the option for the append mode.\nReturns the number of blocks allocated to the file, in …\nReturns the canonical, absolute form of a path with all …\nCreates the specified directory with the options …\nOpens a file in write-only mode.\nSets the option to create a new file, or open it if it …\nCreates a new, empty directory at the provided path.\nRecursively create a directory and all of its parent …\nCreates a new file in read-write mode; error if the file …\nSets the option to create a new file, failing if it …\nReturns the current working directory as a <code>String</code>.\nWhether the file is executable.\nReturns the bare file name of this directory entry without …\nReturns the file type for the file that this entry points …\nReturns the file type for this metadata.\nFlush this output stream, ensuring that all intermediately …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the file attributes.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if this metadata is for a directory. The …\nReturns <code>true</code> if this metadata is for a regular file. The …\nReturns the size of the file, in bytes, this metadata is …\nLook up a file by a given path.\nGiven a path, query the file system to get information …\nQueries metadata about the underlying file.\nCreates a new set of options with default mode/security …\nCreates a blank new set of options ready for configuration.\nAttempts to open a file in read-only mode.\nOpens a file at <code>path</code> with the options specified by <code>self</code>.\nReturns a new OpenOptions object.\nReturns the full path to the file that this entry …\nCheck if a path exists.\nReturns the permissions of the file this metadata is for.\n定义与文件I/O操作相关的trait泛型\nRead the entire contents of a file into a bytes vector.\nPull some bytes from this source into the specified …\nSets the option for read access.\nReturns an iterator over the entries within a directory.\nRead the exact number of bytes required to fill <code>buf</code>.\nRead the exact number of bytes required to fill <code>buf</code>.\nRead all bytes until EOF in this source, placing them into …\nRead the entire contents of a file into a string.\nRead all bytes until EOF in this source, appending them to …\nIndicates that directories should be created recursively, …\nRemoves an empty directory.\nRemoves a file from the filesystem.\nRename a file or directory to a new name. Delete the …\nRewind to the beginning of a stream.\nSeek to an offset, in bytes, in a stream.\nChanges the current working directory to the specified …\nTruncates or extends the underlying file, updating the …\nSets the permissions of the file this metadata is for.\nReturns the total size of this file in bytes.\nReturns the current seek position from the start of the …\nTo truncate the file to a specified length.\nSets the option for truncating a previous file.\nWrite a slice as the entire contents of a file.\nWrite a buffer into this writer, returning how many bytes …\nSets the option for write access.\nAttempts to write an entire buffer into this writer.\nWrites a formatted string into this writer, returning any …\n指定文件打开时的权限\n<code>FileExt</code> 需要满足 <code>AsAny</code> 的要求，即可以转化为 …\n…\n在 exec 时需关闭\n如文件不存在，可创建它\nthe size of the console window\n是否是目录\n对这个文件的输出需符合 IO …\n目录\n确认一定是创建文件。如文件已存在，返回 …\n文件\n用于给虚存空间进行懒分配\nFile I/O trait. …\n文件类型\n文件系统信息\n链接\n…\n…\n非阻塞读写?(虽然不知道为什么但 date.lua …\n指定文件打开时的权限\n其他\n管道\n只读\n读写\n用户组读权限\n其他用户读权限\n用户读权限\n用户组写权限\n其他用户写权限\n用户写权限\n用户组执行权限\n其他用户执行权限\n用户执行权限\nSocket\n标准错误\n标准输入\n标准输出\nIOCTL系统调用支持\n要求把 CR-LF 都换成 LF\n…\n只能写入\npadding\npadding\nGet a flags value with all known bits set.\nGet a flags value with all known bits set.\n把当前对象转化为 <code>Any</code> 类型，供后续 downcast …\n供 downcast_mut 使用\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nGet the underlying bits value.\nGet the underlying bits value.\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nWhether all set bits in a source flags value are also set …\nWhether all set bits in a source flags value are also set …\n获取创建权限\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nGet a flags value with all bits unset.\nGet a flags value with all bits unset.\nwhether the file is executable\nwhether the file is executable\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\n刷新操作\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from a bits value.\nConvert from a bits value.\nConvert from a bits value exactly.\nConvert from a bits value exactly.\nConvert from a bits value, unsetting any unknown bits.\nConvert from a bits value, unsetting any unknown bits.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nGet a flags value with the bits of a flag with the given …\nGet a flags value with the bits of a flag with the given …\n获取路径\n获取文件信息\n获取文件状态\n获取类型\n处于“意外情况”。在 (p)select 和 (p)poll …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nWhether any set bits in a source flags value are also set …\nWhether any set bits in a source flags value are also set …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTo control the file descriptor\nWhether all known bits in this flags value are set.\nWhether all known bits in this flags value are set.\n获取是否需要在 <code>exec()</code> 时关闭\n获取是否是目录\nWhether all bits in this flags value are unset.\nWhether all bits in this flags value are unset.\n…\nYield a set of contained flags values.\nYield a set of contained flags values.\nYield a set of contained named flags values.\nYield a set of contained named flags values.\n获取创建新文件权限 …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\ndebug\n读取操作\nRead from position without changing cursor.\n获得文件的读/写权限\nwhether the file is readable\nwhether the file is readable\n获取读权限\n已准备好读。对于 pipe …\n已准备好写。对于 pipe …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\n移动指针操作\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\n设置 close_on_exec 位 设置成功返回false\n设置文件状态\n最后一次访问时间(纳秒)\n最后一次访问时间(秒)\n块大小\n块个数\n最后一次改变状态时间(纳秒)\n最后一次改变状态时间(秒)\n设备\n用户组id\ninode 编号\n文件类型\n最后一次修改时间(纳秒)\n最后一次修改时间(秒)\n硬链接数\n设备号\n文件大小\n用户id\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\n截断文件到指定长度\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nwhether the file is writable\nwhether the file is writable\n获取写权限\n写入操作\nWrite to position without changing cursor.\nBlock device\nCharacter device\nDirectory\nAlias of <code>axfs_vfs::VfsDirEntry</code>.\nAn opened directory object, with open permissions and a …\nA disk device with a cursor.\nFIFO (named pipe)\nAn opened file object, with open permissions and a cursor.\nRegular file\nAlias of <code>axfs_vfs::VfsNodeAttr</code>.\nAlias of <code>axfs_vfs::VfsNodePerm</code>.\nAlias of <code>axfs_vfs::VfsNodeType</code>.\nThe interface to define custom filesystems in user apps.\nOptions and flags which can be used to configure how a …\nSocket\nSymbolic link\nSets the option for the append mode.\nSets the option to create a new file, or open it if it …\nCreates an empty directory at the path relative to this …\nCreates an empty file at the path relative to this …\nSets the option to create a new file, failing if it …\nwhether the file is executable.\nFlushes the file, writes all buffered data to the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGets the file attributes.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new disk.\nCreates a blank new set of options ready for configuration.\nCreates a new instance of the filesystem with …\nOpens a file at the path relative to the current …\nOpens a directory at the path relative to the current …\nOpens a directory at the path relative to this directory. …\nOpens a file at the path relative to this directory. …\nGet the position of the cursor.\nReads the file at the current position. Returns the number …\nSets the option for read access.\nReads the file at the given position. Returns the number …\nReads directory entries starts from the current position …\nRead a single block starting from the specified offset.\nRead within one block, returns the number of bytes read.\nwhether the file is readable.\nRemoves a directory at the path relative to this directory.\nRemoves a file at the path relative to this directory.\nRename a file or directory to a new name. Delete the …\nSets the cursor of the file to the specified offset. …\nSet the position of the cursor.\nGet the size of the disk.\nTruncates the file to the specified size.\nSets the option for truncating a previous file.\nwhether the file is writable.\nWrites the file at the current position. Returns the …\nSets the option for write access.\nWrites the file at the given position. Returns the number …\nWrite single block starting from the specified offset.\nWrite within one block, returns the number of bytes …")